import Role from "../models/Role";

export const creatBases = async() => {
    try {
        const count1 = await Role.find().estimatedDocumentCount();
        if (count1 > 0) {
            return
        }
        const load = await Promise.all([
            new Role({ name: "user" }).save(),
            new Role({ name: "moderator" }).save(),
            new Role({ name: "admin" }).save(),
        ])
    } catch (error) {
        console.log(error);
    }
}