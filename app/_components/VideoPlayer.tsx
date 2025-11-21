interface Props {
    videoSrc: string;
}

export default function VideoPlayer({
    videoSrc
}: Props){
    return <video autoPlay loop src={videoSrc}></video>
}