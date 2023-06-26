export default function ({redirect}){
    
    try {
      if(window !== undefined){
          const token = window.localStorage.getItem('token')
          if(!token){
            return   redirect({name : "index"})
          }
      }
    } catch (error) {
      redirect({name : 'index'})
    }
}