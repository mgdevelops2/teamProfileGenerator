const Employee = require('../lib/Employee')

describe('Employee', () => {
test('testing for correct name', ()=>{
    let example = new Employee('mike', 1, 'test@mike.com');
    expect(example.getName()).toBe('mike');
})

test('testing for id', ()=>{
    let example = new Employee('mike', 1, 'test@mike.com');
    expect(example.getId()).toBe(1);
})

test('email', ()=>{
    let example = new Employee('mike', 1, 'test@mike.com');
    expect(example.getEmail()).toBe('test@mike.com');
})

test('getting the correct role' , () => {
    let example = new Employee('mike', 1, 'test@mike.com');
    expect(example.getRole()).toBe('Employee');

})
})


