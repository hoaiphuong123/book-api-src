const  BookModel = require('../models/books');
const  ImageModel = require('../models/image');

const resolvers = {
  Query: {
    books: async () => {
      const books = await BookModel.find();
      console.log('All Books:', books);
      return books;
    },
    image: async () => {
      const image = await ImageModel.find();
      console.log('All Image:', image);
      return image;
    },
  },
  Mutation: {
    addBook: async (_, args) => {
      const { title, author, page, genres, rating } = args;
      const book = new BookModel({ title, author, page, genres, rating });
      await book.save();
      return book;
    },
    deleteBook: async (_, args) => {
      try {
        const deletedBook = await BookModel.findByIdAndDelete(args.id);
        if (!deletedBook) {
          throw new Error('Book not found!');
        }
        return 'Book deleted successfully';
      } catch (error) {
        throw new Error(`Error deleting book: ${error.message}`);
      }
    },
    updateBook: async (_, { id, title, author, page, genres, rating }) => {
      try {
        const updateData = {};
        if (title !== undefined) updateData.title = title;
        if (author !== undefined) updateData.author = author;
        if (page !== undefined) updateData.page = page;
        if (genres !== undefined) updateData.genres = genres;
        if (rating !== undefined) updateData.rating = rating;

        const updatedBook = await BookModel.findByIdAndUpdate(
          id,
          updateData,
          { new: true, omitUndefined: true }
        );

        if (!updatedBook) {
          throw new Error('Book not found!');
        }

        return updatedBook;
      } catch (error) {
        throw new Error(`Error updating book: ${error.message}`);
      }
    },
    addImage: async (_, args) => {
      const { imageUrl } = args;
      const image = new ImageModel({ imageUrl });
      await image.save();
      return image;
    },
    deleteImage: async (_, args) => {
      try {
        const deletedImage = await ImageModel.findByIdAndDelete(args.id);
        if (!deletedImage) {
          throw new Error('Image not found!');
        }
        return 'Image deleted successfully';
      } catch (error) {
        throw new Error(`Error deleting image: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
