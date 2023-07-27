import { createVideo, getAllVideosService, getVideoByIdService } from "../services/Video";

export const createVideo = async (req, res) => {
    const {thumbnail} = req.body;

    const newVideo = await createVideo(thumbnail);

    res.status(201).json({data: newVideo});
};

export const getAllVideos = async (req, res) => {
    const allVideos = await getAllVideosService();
    
    res.json({data: allVideos});
};

export const getVideoById = async (req, res) => {
    const {id} = req.params;

    const video = await getVideoByIdService(id);

    res.json({data: video});
}