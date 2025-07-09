import { Stack, TamaguiProvider } from 'tamagui'
import config from '@my/config/src/tamagui.config'

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  )
}
