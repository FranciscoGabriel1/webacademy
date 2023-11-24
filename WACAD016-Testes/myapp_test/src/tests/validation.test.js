const {cepInfo} = require("../utils/cep");

describe("cepInflo()",()=>{
    it("vamos testar a api de cep", ()=>{
        const cep = "69048000";
        const result = cepInfo(cep);
        expect(result).toBe("sucess") 
    })
});