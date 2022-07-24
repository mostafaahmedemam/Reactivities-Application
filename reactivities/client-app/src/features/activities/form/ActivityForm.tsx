import {ChangeEvent, useState} from "react";
import { Form, Segment } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Activity } from './../../../models/activity';

interface Props{
    activity: Activity|undefined;
    closeForm: () => void;
    CreateOrEdit: (activity:Activity) => void;
    submitting:boolean;
}

export default function ActivityForm({activity: selectedActivity,closeForm,CreateOrEdit,submitting}:Props){
    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        date: "",
        description: "",
        category: "",
        city: "",
        venue: ""
    };
    const [activity, setActivity]=useState(initialState);
    function handleSubmit(){
        CreateOrEdit(activity);
    }
    function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setActivity({...activity,[name]:value});
    }
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" name="title" value={activity.title} onChange={handleInputChange}/>
                <Form.TextArea placeholder="Description" name="description" value={activity.description} onChange={handleInputChange}/>
                <Form.Input placeholder="Categorty" name="category" value={activity.category} onChange={handleInputChange}/>
                <Form.Input type="date" placeholder="Date" name="date" value={activity.date} onChange={handleInputChange}/>
                <Form.Input placeholder="City" name="city" value={activity.city} onChange={handleInputChange}/>
                <Form.Input placeholder="Venu" name="venue" value={activity.venue} onChange={handleInputChange}/>
                <Button loading={submitting} floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}