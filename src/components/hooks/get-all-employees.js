import { useEffect, useState } from 'react'
import '../../services/employee-service'
import EmployeeService from '../../services/employee-service';

export function useGetAllEmployees(search) {
    const [employees, SetEmployees] = useState([])
    const [fetching, Setfetching] = useState(true)
    function computeAnnualSalary(employee) {
        switch (employee.contract_type) {
            case 'hourly':
                employee['annual_salary'] = 120 * employee.hourly_salary * 12
                break;
            case 'montly':
            default:
                employee['annual_salary'] = employee.monthly_salary * 12
        }
        return employee;
    }
    useEffect(() => {
        Setfetching(true)
        EmployeeService.getEmployees(search).then(employees => {
            employees = employees.map(employee => computeAnnualSalary(employee))
            SetEmployees(employees)
            Setfetching(false)
        })
    }, [search]);
    return [employees, fetching];
}