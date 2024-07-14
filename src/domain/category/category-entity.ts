

export type CategoryConstructorProps = {
  catigory_id?: string
  name: string
  description?: string | null
  is_active?: boolean
  create_at?: Date

}

export type CategoryCreateCommand = {
  name: string
  description?: string | null
  is_active?: boolean
}

export class Category {
  catigory_id: string
  name: string
  description: string | null
  is_active: boolean
  create_at: Date

  constructor(props: CategoryConstructorProps) {
    this.catigory_id = props.catigory_id
    this.name = props.name
    this.description = props.description  ?? null
    this.is_active = props.is_active ?? true
    this.create_at = props.create_at ?? new Date()
  }

  static create(props: CategoryCreateCommand) :Category{
    return new Category(props)
  }

  changeName(name: string) {
    this.name = name
    return this
  }

  changeDescription(description: string ) {
    this.description = description
    return this
  }
  activate() {
    this.is_active = true
    return this
  }
  deactivate() {
    this.is_active = false
    return this
  }

  toJSON() {
    return {
      catigory_id: this.catigory_id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      create_at: this.create_at
    }
  }

}