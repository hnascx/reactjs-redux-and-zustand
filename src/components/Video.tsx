import ReactPlayer from "react-player"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../store"
import { next } from "../store/slices/player"

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentLesson }
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
