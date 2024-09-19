# My Tiptap Extension

Welcome to **My Tiptap Extension**

This is a custom extension built for the Tiptap editor, designed to enhance the functionality of the editor with additional features. It was built as part of a project where I explored creating custom editor experiences using Tiptap’s flexible framework.

## Why I Created This Extension

As I was diving into the world of rich-text editors, I found Tiptap to be an extremely powerful and flexible tool. However, like any developer, I wanted to push the boundaries and create something that could suit specific needs for projects I was working on. That's when I decided to build this extension to complement Tiptap's core features and make the editor even more capable.

## Features

- **Custom Marks and Nodes**: This extension adds new marks and nodes that allow for additional text styling and content manipulation.
- **Easy Integration**: You can integrate this extension seamlessly into any Tiptap-based project.
- **Rich Editing Experience**: My extension enhances the editing experience by adding new tools for more dynamic content creation.

## Installation

You can easily install this extension via npm:

```bash
npm install my-tiptap-extension
```

Then import and use it in your Tiptap editor setup like this:

```javascript
import MyTiptapExtension from 'my-tiptap-extension';

const editor = new Editor({
  extensions: [
    MyTiptapExtension,
    //and other basic expentions
  ],
});
```

## How to Use

Simply integrate the extension in your project’s editor configuration, and it will be ready to use. Check out the demo for more details on usage.

## Contributing

I’m excited to have built this extension and look forward to any feedback or contributions from the community. Feel free to fork this repo, submit pull requests, or report any issues you find. If you’ve got ideas for improvement, I’d love to hear them!

## Support

If you encounter any problems or have questions, don't hesitate to reach out by submitting an issue or contacting me directly.

## Special Thanks

I’d like to thank the entire Tiptap team for providing such an excellent foundation to build on. Your flexibility has allowed developers like me to explore and extend what’s possible with rich-text editing!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to modify any part of it, or let me know if you'd like more sections added!
