import { exec } from "child_process"
import { ResolvedConfig } from "vite"

export const buildSlides = () => {

  let config: ResolvedConfig | null = null

  return {
    name: 'build-slides',
    configResolved(resolvedConfig: ResolvedConfig) {
      config = resolvedConfig
    },
    closeBundle() {
      exec(`tree -J -L 1 slides -o ${config.build.outDir}/slides.json`)
    },
  }
}

export default buildSlides