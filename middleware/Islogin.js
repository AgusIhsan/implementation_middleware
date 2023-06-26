export default function ({redirect}){
    try {
      if(window !== undefined){
          const token = window.localStorage.getItem('token')
          if(token !== null){
            return   redirect({name : "konten"})
          }
      }
    } catch (error) {
      redirect({name : 'konten'})
    }
}