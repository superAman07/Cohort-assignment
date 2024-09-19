import { Mark } from '@tiptap/core';

const CommentMark = Mark.create({
  name: 'comment',

  addAttributes() {
    return {
      text: {
        default: '',
        parseHTML: element => element.getAttribute('data-comment'),
        renderHTML: attributes => {
          return { 'data-comment': attributes.text };
        },
      },
      author: {
        default: '',
        parseHTML: element => element.getAttribute('data-author'),
        renderHTML: attributes => {
          return { 'data-author': attributes.author };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: 'span[data-comment]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, class: 'commentHighlight' }, 0];
  },

  addCommands() {
    return {
      addComment: (text, author) => ({ commands }) => {
        return commands.toggleMark(this.name, { text, author });
      }
    };
  }
});

export default CommentMark;
