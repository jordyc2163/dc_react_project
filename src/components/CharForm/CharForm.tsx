import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material';
import { chooseImage, chooseAlias, chooseFirstName, chooseLastName, chooseLocation, chooseBio, chooseOrigin, choosePower } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetDataHeroes, useGetDataVillains } from '../../custom-hooks';


interface CharFormProps {
    id?: string;
    data?: {};
}

interface CharState {
    image: string;
    alias: string;
    first_name: string;
    last_name: string;
    location: string;
    bio: string;
    origin: string;
    power: string;
}

export const CharForm = (props: CharFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data: any, event: any) => {
        console.log(data.faction)
        switch (data.faction) {
            case "hero":
                if (props.id!) {
                    await serverCalls.updateHero(props.id, data)
                    window.location.reload();
                    event.target.reset();
                } else {
                    dispatch(chooseImage(data.image))
                    dispatch(chooseAlias(data.alias))
                    dispatch(chooseFirstName(data.first_name))
                    dispatch(chooseLastName(data.last_name))
                    dispatch(chooseOrigin(data.origin))
                    dispatch(chooseLocation(data.location))
                    dispatch(choosePower(data.power))
                    dispatch(chooseBio(data.bio))
                    console.log(store.getState())
                    await serverCalls.createHero(store.getState())
                    window.location.reload();
                    event.target.reset();
                };
                break;
            case "villain":
                if (props.id!) {
                    await serverCalls.updateVillain(props.id, data)
                    window.location.reload();
                    event.target.reset();
                } else {
                    dispatch(chooseImage(data.image))
                    dispatch(chooseAlias(data.alias))
                    dispatch(chooseFirstName(data.first_name))
                    dispatch(chooseLastName(data.last_name))
                    dispatch(chooseOrigin(data.origin))
                    dispatch(chooseLocation(data.location))
                    dispatch(choosePower(data.power))
                    dispatch(chooseBio(data.bio))
                    console.log(store.getState())
                    await serverCalls.createVillain(store.getState())
                    window.location.reload();
                    event.target.reset();
                };
                break
        }
    }

    return (
        <Box sx={{
            width: '30vw'
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input {...register('alias')} name="alias" placeholder='Batman' label='Alias' />
                </div>
                <div>
                    <Input {...register('first_name')} name="first_name" placeholder='Bruce' label='First Name' />
                </div>
                <div>
                    <Input {...register('last_name')} name="last_name" placeholder='Wayne' label='Last Name' />
                </div>
                <div>
                    <Input {...register('origin')} name="origin" placeholder='Detective Comics #27 1939' label='First Appearance' />
                </div>
                <div>
                    <Input {...register('location')} name="location" placeholder='Gotham City' label='Location' />
                </div>
                <div>
                    <Input {...register('power')} name="power" placeholder='Intellect' label='Power' />
                </div>
                <div>
                    <Input {...register('bio')} name="bio" placeholder='In the name of his murdered parents' label='Bio' />
                </div>
                <div>
                    <Input {...register('image')} name="image" placeholder='Insert Image URL' label='Image' />
                </div>
                <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                {...register("faction")}
                                value="hero"
                                control={<Radio />}
                                label="Hero" />
                            <FormControlLabel
                                {...register("faction")}
                                value="villain"
                                control={<Radio />}
                                label="Villain" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </Box>
    )
}