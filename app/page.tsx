import VideoPlayer from "./_components/VideoPlayer";

export default function Home() {
  const isUserSignedIn = false; // this will be swapped with auth js logic
  const videoSrc = "https://v.ftcdn.net/08/45/32/89/700_F_845328926_NtO7sRKtchWFTK19AVUdaUWZUASGlXTL_ST.mp4"; // This will be fetched from a cdn (cloudflare or as part of vercel)
  return (
    <header className="flex justify-between">
      <h1>Gym Helper</h1>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">{isUserSignedIn ? "Sign Out" : "Sign In/Up"}</button>
      <main>
        <VideoPlayer videoSrc={videoSrc} />
      </main>
    </header>
  );
}
