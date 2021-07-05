import { useEffect, useState } from "react";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter
} from 'react-admin';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {field: 'id', headerName: 'Id'},
    {field: 'title', headerName: 'Tile', width: 300},
    {field: 'body', headerName: 'Body', width: 600}
]


export const MyPostList = (props) => {

    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => fetchData(), [])

    return (
        <div style={{height: 700, marginTop: '5rem'}}>
            <DataGrid rows={posts} columns={columns} pageSize={10} checkboxSelection />
        </div>
    );
}