'use server';

export default async function getBase64ImageUrl(image) {
	const { public_id, format } = image;

	return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_50,e_blur:200,q_1/${public_id}.${format}`;
}
