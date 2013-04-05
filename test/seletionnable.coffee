describe 'a Page' ->
  beforeEach ->
   @page = new Page

  it 'add a selectionnable'
    select = new Selectionable
      page: page
      el: $("#cv")[0]
    @page.add select
