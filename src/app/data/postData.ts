import { Post } from "../types/PostsType"

export const addNewPost = (newPost: Post) => {
  postData.push(newPost);
};

export const postData: Post[] = [
  {
    "id": 1,
    "userId": 101,
    "post": "This is the first post.",
    "postedBy": "User A",
    "date": "2023-10-24T09:00:00",
    "avatar": "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
  }
]
