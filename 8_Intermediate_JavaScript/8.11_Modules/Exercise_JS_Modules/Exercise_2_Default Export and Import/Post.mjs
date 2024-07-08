/**

    2. Default Export and Import:** Use default exports and imports by developing a blogging module.
    - Create `Post.mjs`, exporting a default `Post` class that includes a constructor for `title` and `content`, and a `publish` method that logs the title and content to the console.
    - Create `blog.mjs` that imports the `Post` class. Create an instance, and call the `publish` method to simulate posting.

**/

export default class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(`Publishing post: ${this.title} - ${this.content}`);
    }
}