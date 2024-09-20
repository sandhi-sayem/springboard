import SpaceTravelApi from "../services/SpaceTravelApi";

const Helper = () => {
    const getSpacecrafts = async () => {
        const res = await SpaceTravelApi.getSpacecrafts();
        return res.data;
    }

    const createSpacecraft = async () => {
        const spacecraft = {
            name: "Sandhi",
            capacity: 20,
            description: "Testing spacecraft",
            pictureURL: "URL"
        }

        const res = await SpaceTravelApi.buildSpacecraft({ ...spacecraft });
        return res;
    }

    const sentSpacecraftToPlanet = async () => {
        const res = await SpaceTravelApi.sendSpacecraftToPlanet({
            id: "prixpax",
            planet: 1
        })
    }

    // createSpacecraft().then(data => console.log(data));
    getSpacecrafts().then(data => console.log(data[0].id, data[0].currentLocation));
}

export default Helper;