import './App.css'
import MiCVComponent from './components/cv/MiCVComponent'

function App() {

  const data = {
    personal: {
      name: "Pechugas",
      lastName: "Laru",
      mobile: "1234-5678",
      address: "Calle falsa 12345",
      email:"email@ejemplo.com"
    },
    photo: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    education: {
      degree: "Bachelor en sarasa",
      institution:"Pontificia Universidad del Sarasa",
      years:"1995-2025"
    },
    experience: [
      {
        company:"Empresa1",
        description:"tareas blablabla",
        dateStart:"AAAA-MM",
        dateFinish:"AAAA-MM"
      },
      {
        company:"Empresa2",
        description:"tareas blablabla",
        dateStart:"AAAA-MM",
        dateFinish:"AAAA-MM"
      },
      {
        company:"Empresa3",
        description:"tareas blablabla",
        dateStart:"AAAA-MM",
        dateFinish:"AAAA-MM"
      }
    ]

  }

  return (
    <>
      <MiCVComponent data={data}/>
    </>
  )
}

export default App
