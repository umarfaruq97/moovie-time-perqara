export interface DropdownType {
  uuid: string | number
  keterangan: string
}

export interface DropdownOldType {
  item: string | number
  keterangan: string | number
}

export interface PaginationType {
  total_data: number | string
  limit: number | string
  total_page: number | string
  page: number | string
  total_data_perpage?: number | string
  total_data_in_page?: number | string
}

export interface PaginationRequestType {
  page: number
  limit: number
}

export interface MenuItem {
  name: string
  icon: string
  route: string
}

export interface SorterType {
  id: string
  title: string
  sort_by: string
  order_by: 'asc' | 'desc'
  sort_name: string
}
