import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";


import { abc, frutas, numero } from "./constants";

import { IForm } from "./type";

import * as S from "./styles";
import axios from "axios";

export default function Body() {

  const [form, setForm] = useState<IForm>({
    input: '',
    select1: abc[0],
    select2: numero[0],
    select3: frutas[0],
  });

  const [data, setData] = useState<{
    name: string;
  }[]>([])

  const handleSubmit = async () => {
    try {
      console.log(form);
      
      const response = await axios.get('/api/hello')

      console.log(response.data)

      setData(response.data)

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <S.HomeContainer>
      <div>
        <Input id="input" value={form.input} onChange={(e) => setForm({ ...form, input: e.target.value })} />

        <Select
          id="select1"
          onChange={(e) => setForm({ ...form, select1: e.target.value })}
          value={form.select1}
        >
          {abc.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>

        <Select
          id="select2"
          onChange={(e) => setForm({ ...form, select2: e.target.value })}
          value={form.select2}
        >
          {numero.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>

        <Select
          id="select3"
          onChange={(e) => setForm({ ...form, select3: e.target.value })}
          value={form.select3}
        >
          {frutas.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>

        <Button onClick={() => handleSubmit()}>Enviar</Button>
      </div>


      <div className="array">
          {data?.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
      </div>
    </S.HomeContainer>
  );
}
