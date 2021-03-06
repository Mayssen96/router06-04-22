import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import Input from './input';
import {useState} from 'react'
import {addMovie} from '../../redux/action'
import {useDispatch, useSelector} from 'react-redux'
function CustomModals() {
    const dispatch = useDispatch();
 
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [rating,setrating] = useState('')
    const [description,setDescription] = useState('')
  
    console.log(title,rating)
    const yosra=useSelector(state=>state.Movie)
    // const addNewMovie =() => {
    //   yosra.push({id:yosra.length+1,title,description,image,rating})
    //     dispatch ( addMovie(yosra))
    // }
    const addNewMovie=()=>{
      dispatch(addMovie({id:yosra.length+1,title,description,posterURL :image,rating})) 
      handleClose ()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         ADD
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Input onChange={(e)=> setTitle(e.target.value)} type='texte' placeholder = 'title'/>
              <Input onChange={(e)=> setImage(e.target.value)} type='texte' placeholder = 'rating'/>
              <Input onChange={(e)=> setrating (e.target.value)}type='texte' placeholder = 'image'/>
              <Input  onChange={(e)=> setDescription (e.target.value)}  type='texte' placeholder = 'description '/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> addNewMovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default CustomModals;