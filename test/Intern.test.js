const Intern = require('../lib/Intern')

describe('Intern', () => {
test('testing for correct name', ()=>{
    let example = new Intern('mike', 1, 'test@mike.com', 'School');
    expect(example.getName()).toBe('mike');
})

test('testing for id', ()=>{
    let example = new Intern('mike', 1, 'test@mike.com', 'School');
    expect(example.getId()).toBe(1);
})

test('email correct', ()=>{
    let example = new Intern('mike', 1, 'test@mike.com', 'School');
    expect(example.getEmail()).toBe('test@mike.com');
})

test('getting the correct role' , () => {
    let example = new Intern('mike', 1, 'test@mike.com', 'School');
    expect(example.getRole()).toBe('Intern');

} )
    
test('is the School  correct' , () => {
    let example = new Intern('mike', 1, 'test@mike.com', 'School');
    expect(example.getSchool()).toBe('School');

})
})

