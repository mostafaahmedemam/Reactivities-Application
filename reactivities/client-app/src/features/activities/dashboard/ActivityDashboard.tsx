import { Grid } from "semantic-ui-react";
import ActivityDetails from "../details/ActivityDetails";
import { Activity } from './../../../models/activity';
import ActivityList from "./ActivityList";
import ActivityForm from './../form/ActivityForm';

interface Props{
    activities:Activity[];
    selectedActivity:Activity|undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity:() => void;
    editMode: boolean;
    openForm: (id:string) => void;
    closeForm: () => void;
    CreateOrEdit: (activity:Activity) => void;
    deleteActivity: (id:string) => void;
    submitting: boolean;
}
export default function ActivityDashboard({activities,selectedActivity,deleteActivity,
    selectActivity,cancelSelectActivity,editMode,openForm,closeForm,CreateOrEdit,submitting}:Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={activities}
                submitting={submitting}
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity}
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                {editMode && 
                <ActivityForm
                closeForm={closeForm}
                CreateOrEdit={CreateOrEdit}
                activity={selectedActivity}
                submitting={submitting}/>}
            </Grid.Column>
        </Grid>
    )
}