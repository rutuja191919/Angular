import {CheckEven} from './Even'

describe('Check the even odd',()=>  //Suite of test case(Pishvi)
{
    it('Should return 1 if number is even',()=>  //Seperate test case
    {
        const ret = CheckEven(6);
        expect(ret).toBe(1);
    })

    it('Should return 0 if number is odd',()=>{  //Seperate test case
        const ret = CheckEven(7);
        expect(ret).toBe(0);
    })
})