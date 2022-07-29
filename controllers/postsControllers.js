import { Post } from '../models/postModel.js';

/**
 *
 * @type {import("express").RequestHandler}
 */
export const getAllPosts = async (__, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: 'success',
      data: {
        size: posts.length,
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: error.message,
      },
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: error.message,
      },
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const checkBody = (req, res, next) => {
  if ('post' in req.body) {
    next();
  } else {
    res.status(409).json({
      status: 'fail',
      message: 'You must provide a post',
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const createPost = async (req, res) => {
  try {
    console.log(req.body);
    const post = await Post.create(req.body);
    const allPosts = await Post.find();

    res.status(201).json({
      status: 'success',
      data: {
        size: allPosts.length,
        posts: allPosts,
        post,
      },
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      data: {
        message: error.message,
      },
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const newPost = await Post
      .findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    res.status(201).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      data: {
        message: error.message,
      },
    });
  }
};

/**
 *
 * @type {import("express").RequestHandler}
 */
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const newPost = await Post.findByIdAndDelete(id);
    const allPosts = await Post.find();

    res.status(200).json({
      status: 'success',
      data: {
        size: allPosts.length,
        posts: allPosts,
        post: newPost,
      },
    });
  } catch (error) {
    res.status(409).json({
      status: 'fail',
      data: {
        message: error.message,
      },
    });
  }
};
