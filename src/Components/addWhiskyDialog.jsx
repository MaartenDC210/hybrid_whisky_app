import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

export const AddWhiskyDialog = ({open, handleClose, addWhisky}) => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const submit = (data) => {
        addWhisky(data);
        handleClose();
    }

    console.log(errors);
    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle>Add Whisky</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(submit)}>
                    <input {...register("name", {required: 'This is required'})} placeholder='name' />
                    <p>
                        {errors.name?.message}
                    </p>
                    <input {...register("distillery", {required: 'This is required'})} placeholder='distillery' />
                    <label>
                        Peated
                        <input type='checkbox' {...register("peated")} placeholder='Peated'/>
                    </label>
                    <input {...register("type", {required: 'This is required'})} placeholder='type' />
                    <input {...register("region", {required: 'This is required'})} placeholder='region' />
                    <input {...register("country", {required: 'This is required'})} placeholder='country' />
                    <input {...register("color")} placeholder='color' />
                    <input {...register("nose")} placeholder='nose' />
                    <input {...register("palate")} placeholder='palate' />
                    <input {...register("distilleryWebsite", {required: 'This is required'})} placeholder='distillery website' />
                    <input {...register("year")} placeholder='year' />
                    <input {...register("yearBottled", {required: 'This is required'})} placeholder='year bottled' />
                    <label>
                        Owned
                        <input type='checkbox' {...register("owned")} placeholder='owned'/>
                    </label>
                    <label>
                        Empty
                        <input type='checkbox' {...register("empty")} placeholder='empty'/>
                    </label>
                    <label>
                        Recommendation
                        <input type='checkbox' {...register("recommendation")} placeholder='recommendation'/>
                    </label>
                    <input type='submit'/>

                </form>
            </DialogContent>
        </Dialog>
    )
};