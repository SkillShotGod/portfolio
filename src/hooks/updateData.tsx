

export const updateDataApi = async (data : any)=>{

const response =    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify(data),
})

if (response.status=== 200){
    // fetchData()
}

const res= response.json()

return res
 
}