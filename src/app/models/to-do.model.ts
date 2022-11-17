export class ToDoItem {
  public title: string;
  public date: string;
  public priority: string;
  public description: string;

  constructor(
    title: string,
    date: string,
    priority: string,
    description: string
  ) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
  }
}
