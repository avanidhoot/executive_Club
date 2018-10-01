import { programs, details } from './data';

const obj = {
    getPrograms() {
        return programs;
    },
    getProgramDetail(id) {
        const obj = details.filter(p=>p.id ==id)[0];
        const program = programs.filter(p=>p.id ==id)[0];
        return {...obj,...program};
    }
}

export default obj;