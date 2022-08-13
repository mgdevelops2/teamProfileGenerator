const Manager = require('../lib/Manager')

describe('Manager', () => {
test('testing for correct name', ()=>{
    let example = new Manager('mike', 1, 'test@mike.com', 'Phone');
    expect(example.getName()).toBe('mike');
})

test('testing for id', ()=>{
    let example = new Manager('mike', 1, 'test@mike.com', 'Phone');
    expect(example.getId()).toBe(1);
})

test('email', ()=>{
    let example = new Manager('mike', 1, 'test@mike.com', 'Phone');
    expect(example.getEmail()).toBe('test@mike.com');
})

test('getting the correct role' , () => {
    let example = new Manager('mike', 1, 'test@mike.com', 'Phone');
    expect(example.getRole()).toBe('Manager');

} )
    
test('is the office number correct' , () => {
    let example = new Manager('mike', 1, 'test@mike.com', 'Phone');
    expect(example.getofficeNumber()).toBe('Phone');

})
})

