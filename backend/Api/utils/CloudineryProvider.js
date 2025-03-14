import { Readable } from 'stream'
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.api_secret,
});

// Cloudinary upload function using streams
export const uploadStream = async (buffer, folder ) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder, resource_type: 'auto' }, 
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    // Convert buffer to a readable stream and pipe to Cloudinary
    Readable.from(buffer).pipe(uploadStream);
  });
};