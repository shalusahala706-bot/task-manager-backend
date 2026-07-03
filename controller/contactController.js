export const getContacts = (req, res) =>{
    res.status(200).json([
    {id:1, name:"Contact 1", email: "person1@exmple.com"},
    {id:2, name:"Contact 2", email: "person2@exmple.com"},
    {id:3, name:"Contact 3", email: "person3@exmple.com"}
  ]);
}