import {
    Table,
    TableHeader,
    TableDetail,
  } from "../ui/Table"

  import { ITable, ITableHeader, ITableDetail } from "../../interfaces/Table"
import Icon from "../ui/Icon/Icon"

const User = () => {


    const data: ITable = {
        header: [
            {
                align: "center",
                text: "#",
                type: "text",
                width: "100px"
            },
            {
                align: "center",
                text: "Rut",
                type: "text",
                width: "200px"
            },
            {
                align: "left",
                text: "Nombre",
                type: "text",
                width: "450px"
            },
            {
                align: "center",
                text: "Opciones",
                type: "text",
                width: "150px"
            }
        ],
        detail: [
            {
                rowData: ["1", "23940293", "Centro Médico Alameda"]
            },
            {
                rowData: ["2", "72848293", "Centro Dental Dentalink"]
            },
            {
                rowData: ["3", "45252453", "Electrónica Automotriz Videla"]
            },
            {
                rowData: ["4", "75674575", "Clínica Santa Mónica"]
            },
            {
                rowData: ["5", "38912389", "Clínica Santa Cecilia"]
            },
            {
                rowData: ["6", "34534525", "Vulcanización Express"]
            },
            {
                rowData: ["7", "83568735", "Mecánica Auromotriz Pérez Loyola"]
            },
            {
                rowData: ["8", "96898694", "Centro Veterinario Flores"]
            },
            {
                rowData: ["9", "36235235", "Centro Dental San Bernardo"]
            },
        ]
    }

    return <>
    <h1>Listado de Usuarios</h1>
    <div className="w-[900px]">
        <Table {...data} />
    </div>
    </>
}

export default User