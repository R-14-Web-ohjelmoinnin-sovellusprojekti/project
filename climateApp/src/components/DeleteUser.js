import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './components.css';
import Constants from '../Constants.json';

export default function DeleteUser(props) {
    const navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload(false);
    }

    const deleteAccount = event => {
        event.preventDefault();

        if (window.confirm('Are you sure, you want to delete user?')) {
            axios
                .delete(Constants.API_ADDRESS + '/delete/user/' + props.username, {
                    headers: { 'Authorization': 'Bearer' + props.token },
                })
                .then(response => {
                    console.log('User is deleted', response.data);
                    logOut();
                })
                .catch(error => {
                    console.log('Not working', error);
                });
        }
    };

    return (
        <div className="deleteuser-container">
            <div className="deleteuser-form">
                <h2>Delete User</h2>
                <form onSubmit={deleteAccount}>
                    <div>
                        <br />
                        <button type="submit">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
