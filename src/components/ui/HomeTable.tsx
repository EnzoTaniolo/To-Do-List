import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Edit, EllipsisVertical, Trash } from 'lucide-react'

export function HomeTable() {
  return (
    <Table className="max-w-[1400px] mx-auto mt-6">
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>
            <p>Your Task</p>
          </TableHead>
          <TableHead>
            <p>Description</p>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="flex justify-center">
            <p>Options</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-y p-10">
        <TableRow className="">
          <TableCell className="flex justify-center items-center">
            <Checkbox />
          </TableCell>
          <TableCell className="">
            <p>Walk the dog</p>
          </TableCell>
          <TableCell className="">
            <p>Bring plastic bags</p>
          </TableCell>
          <TableCell className="">
            <p>To do</p>
          </TableCell>
          <TableCell className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/" className="flex gap-2 text-destructive">
                    Excluir <Trash />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/" className="flex gap-2">
                    Editar <Edit />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
