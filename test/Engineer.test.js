const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
test('testing for correct name', ()=>{
    let example = new Engineer('mike', 1, 'test@mike.com', 'GitHub');
    expect(example.getName()).toBe('mike');
})

test('testing for id', ()=>{
    let example = new Engineer('mike', 1, 'test@mike.com', 'GitHub');
    expect(example.getId()).toBe(1);
})

test('email correct', ()=>{
    let example = new Engineer('mike', 1, 'test@mike.com', 'GitHub');
    expect(example.getEmail()).toBe('test@mike.com');
})

test('getting the correct role' , () => {
    let example = new Engineer('mike', 1, 'test@mike.com', 'GitHub');
    expect(example.getRole()).toBe('Engineer');

} )
    
test('is the GitHub number correct' , () => {
    let example = new Engineer('mike', 1, 'test@mike.com', 'GitHub');
    expect(example.getGitHub()).toBe('GitHub');

})
})

