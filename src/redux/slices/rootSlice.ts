import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
            image: "http://www.passion-estampes.com/deco/affiches/comics/dc-comics-batman-forever.jpg",
            alias: "Batman",
            first_name: "Bruce",
            last_name: "Wayne",
            origin: "Detective Comics #27 1939",
            location: "Gotham",
            power: "Intellect, Fighting Skills, Wealth",
            bio: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman. One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. ",
    },
    reducers: {
        chooseImage: (state, action) => {state.image = action.payload},
        chooseAlias: (state, action) => {state.alias = action.payload},
        chooseFirstName: (state, action) => {state.first_name = action.payload},
        chooseLastName: (state, action) => {state.last_name = action.payload},
        chooseOrigin: (state, action) => {state.origin = action.payload},
        chooseLocation: (state, action) => {state.location = action.payload},
        choosePower: (state, action) => {state.power = action.payload},
        chooseBio: (state, action) => {state.bio = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAlias, chooseFirstName, chooseLastName, chooseOrigin, chooseLocation, choosePower, chooseBio, chooseImage} = rootSlice.actions;