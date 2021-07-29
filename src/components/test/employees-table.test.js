import { render, screen } from '@testing-library/react';
import EmployeesTable from '../employees-table';


test('Employees Table -> testing', () => {
    const {container} = render(<EmployeesTable />);
    const schema = [
        { header: "Id", prop: "id" },
        { header: "Employee Name", prop: "employee_name" },
        { header: "Contract Type", prop: "contract_type"},
        { header: "Hourly Salary", prop: "hourly_salary"},
        { header: "Monthly Salary", prop: "monthly_salary"},
        { header: "Annual Salary", prop: "annual_salary"}
    ]
    // headers columns
    const head = container.querySelector('thead')
    expect(head).toBeInTheDocument()
    schema.forEach(prop => {
        const element = screen.getByText(new RegExp(`^${prop.header}`, 'i'));
        expect(element).toBeInTheDocument();
    });

    const body = container.querySelector('tbody')
    expect(body).toBeInTheDocument()

    const searchBar = container.querySelector('.__search_bar_component')
    expect(searchBar).toBeInTheDocument()
});
