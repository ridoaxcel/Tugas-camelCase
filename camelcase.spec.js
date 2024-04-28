import {expect} from "chai"
import camelCase from "./camelcase.js"

const huruf = 'a';
const length = 100000 + 1;
const dummyText = huruf.repeat(length);

describe('Input Format', function(){
    it('IF_01 - Inputan dengan huruf pertama lowercase', function(){
        const formCamelCase = camelCase('saveChangesInTheEditor')
        expect(formCamelCase).to.equal(5);
    })

    it('IF_02 - Inputan dengan huruf pertama bukan lowercase', function(){
        const formCamelCase = camelCase('SaveChangesInTheEditor')
        expect(formCamelCase).to.equal('Huruf pertama bukan lowercase');
    })

    it('IF_03 - Inputan dengan semua huruf uppercase', function(){
        const formCamelCase = camelCase('SAVECHANGESINTHEEDITOR')
        expect(formCamelCase).to.equal('Semua huruf uppercase');
    })

    it('IF_04 - Inputan tipe angka', function(){
        const formCamelCase = camelCase(5)
        expect(formCamelCase).to.equal('Inputan anda bukan string');
    })

    it('IF_05 - Inputan dengan boolean', function(){
        const formCamelCase = camelCase(true)
        expect(formCamelCase).to.equal('Inputan anda bukan string');
    })

    it('IF_06 - Inputan kosong', function(){
        const formCamelCase = camelCase()
        expect(formCamelCase).to.equal('Input anda kosong');
    })
    
    it('IF_07 - Inputan panjang string lebih dari 10^5', function(){
        const formCamelCase = camelCase(dummyText)
        expect(formCamelCase).to.equal('Panjang string tidak boleh melebihi 10^5');
    })

    it('IF_08 - Inputan memuat space', function(){
        const formCamelCase = camelCase('save ChangesInTheEditor')
        expect(formCamelCase).to.equal('Inputan mengandung spesial karakter');
    })

    it('IF_09 - Inputan dengan memuat karakter spesial', function(){
        const formCamelCase = camelCase('save!ChangesInTheEditor')
        expect(formCamelCase).to.equal('Inputan mengandung spesial karakter');
    })

    it('IF_10 - Inputan undefined', function(){
        const formCamelCase = camelCase(undefined)
        expect(formCamelCase).to.equal('Input anda kosong');
    })

    it('IF_11 - Inputan null', function(){
        const formCamelCase = camelCase(null)
        expect(formCamelCase).to.equal('Input anda kosong');
    })

    it('IF_12 - Inputan memuat space diawal string', function(){
        const formCamelCase = camelCase(' saveChangesInTheEditor')
        expect(formCamelCase).to.equal('Inputan mengandung spesial karakter');
    })
})