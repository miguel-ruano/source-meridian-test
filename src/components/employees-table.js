import { useRef, useState } from "react"
import SearchBar from "./search-bar"
import { useGetAllEmployees } from "./hooks/get-all-employees"
import currencyFormat from "./utils/currency-formatter"

export const schema = [
    { header: "Id", prop: "id" , formatter: (v) => `# ${v}` },
    { header: "Employee Name", prop: "employee_name" },
    { header: "Contract Type", prop: "contract_type", className: "has-text-weight-semibold" },
    { header: "Hourly Salary", prop: "hourly_salary", formatter: (v) => currencyFormat(v) },
    { header: "Monthly Salary", prop: "monthly_salary", formatter: (v) => currencyFormat(v) },
    { header: "Annual Salary", prop: "annual_salary", formatter: (v) => currencyFormat(v) }
]

export default function EmployeesTable() {
    const [search, setSearch] = useState('')
    const tableHead = schema.map(prop => <th key={prop.prop}>{prop.header}</th>)
    const [employees, fetching] = useGetAllEmployees(search)
    return (
        <div className="__employees-table-wrapper">
            <SearchBar search="" goToSearch={search => setSearch(search)} buttonTitle="Get Employees" barTitle="Search by Employee Id" />
            {
                fetching ? <progress className="progress is-small is-primary" max="100">90%</progress> : null
            }
            <table className="_employees-table table is-striped is-fullwidth">
                <thead>
                    <tr>{tableHead}</tr>
                </thead>
                <tbody>
                    {
                        employees && employees.length > 0 ?
                            employees.map(employee => (
                                <tr key={employee.id}>
                                    {schema.map(prop => 
                                        <td key={employee.id + "-" + prop.prop} className={prop["className"]} >
                                            {prop.formatter ? prop.formatter(employee[prop.prop]) : employee[prop.prop]}
                                        </td>
                                    )}
                                </tr>
                            ))
                        :
                            <tr><th colSpan={schema.length} className="has-text-centered">{fetching ? "Fetching...." : "Not employee found"}</th></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}