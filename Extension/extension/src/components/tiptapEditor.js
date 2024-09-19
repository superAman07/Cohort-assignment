import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CommentMark from './CommentMark'; 
import { db } from '../firebase';
import { ref, set, onValue } from 'firebase/database';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, CommentMark],
    content: '<p>Select some text and add a comment!</p>',
  });

  const handleAddComment = () => {
    const comment = prompt('Enter your comment');
    const author = prompt('Enter your name');
    if (comment && author) {
      const newCommentRef = ref(db, 'comments/' + new Date().getTime());
      set(newCommentRef, { comment, author });

      editor.chain().focus().addComment(comment, author).run();
    }
  };

  useEffect(() => {
    const commentsRef = ref(db, 'comments');
    onValue(commentsRef, (snapshot) => {
      const comments = snapshot.val();
      if (comments) {
        Object.values(comments).forEach(({ comment, author }) => {
          editor.chain().focus().addComment(comment, author).run();
        });
      }
    });
  }, [editor]);

  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default TiptapEditor;
