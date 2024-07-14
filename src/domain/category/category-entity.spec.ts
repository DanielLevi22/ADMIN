import { Category } from "./category-entity";
describe('category unit test', () => {

  it('should create a category', () => {

    const input = { 
      name: 'Movie',
    }
    let category = new Category(input)

    expect(category.catigory_id).toBeUndefined()
    expect(category.name).toBe('Movie')
    expect(category.description).toBeNull()
    expect(category.is_active).toBeTruthy()
    expect(category.create_at).toBeInstanceOf(Date)
    

   category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      create_at: new Date()
    })
    expect(category.catigory_id).toBeUndefined()
    expect(category.name).toBe('Movie')
    expect(category.description).toBe('Movie description')
    expect(category.is_active).toBeFalsy()
    expect(category.create_at).toBeInstanceOf(Date)
  })

  it('should change name', () => {
    let category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      create_at: new Date()
    })
    category.changeName('TV Show')
    expect(category.name).toBe('TV Show')
  })

  it('should change description', () => {
    let category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      create_at: new Date()
    })
    category.changeDescription('TV Show description')
    expect(category.description).toBe('TV Show description')
  })

  it('should activate', () => {
    let category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      create_at: new Date()
    })
    category.activate()
    expect(category.is_active).toBeTruthy()
  })

  it('should deactivate', () => {
    let category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      create_at: new Date()
    })
    category.deactivate()
    expect(category.is_active).toBeFalsy()
  })

  it("shoud be able to chage status active to false", () => {
    let category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: true,
      create_at: new Date()
    })

    category.deactivate()
    expect(category.is_active).toBeFalsy()    
  })
  
})