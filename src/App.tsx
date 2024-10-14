
import { Fejlec } from './componens/Fejlec'
import { KepGalleria } from './componens/KepGalleria'
import { Lablec } from './componens/Lablec'
import { MiertFontosASport } from './componens/MiertFontosASport'
import { NepszeruSportok } from './componens/NepszeruSportok'
import { SportokElonyei } from './componens/SportokElonyei'
import './index.css'


function App() {
  
  return (
    <>
      <body>
        
        <Fejlec></Fejlec>
        <NepszeruSportok></NepszeruSportok>
        <SportokElonyei></SportokElonyei>
        <KepGalleria></KepGalleria>
        <MiertFontosASport></MiertFontosASport>
        <Lablec></Lablec>
      </body>
      
    </>
  )
}

export default App
