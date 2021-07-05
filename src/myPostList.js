import { useEffect, useState } from "react";
import {
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    useRecordContext,
    useListContext,
    ListContextProvider
} from 'react-admin';
import { useGetList, useListController } from 'react-admin';



export const MyPostListDois = (props) => {

//     const { data, ids } = useGetList(
//         'posts',
//         { page: 1, perPage: 10 },
//         { field: 'published_at', order: 'DESC' }
//     );

//   console.log(data)

    return (
        <div>
            <ListContextProvider value={useListController(props)}>
                <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            </ListContextProvider>
            {/* <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid> */}
        </div>
    );
}