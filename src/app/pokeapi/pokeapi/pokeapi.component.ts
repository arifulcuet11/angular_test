import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectPokemons, selectPokemonsLoading } from 'src/app/store/selectors/pokeapi.selector';
import { Pokemon } from '../models/pokeapi';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.scss']
})
export class PokeapiComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'url'];
  dataSource = new MatTableDataSource<Pokemon>();
  pageIndex = 0;
  isLoading = false;
  pageSize = 5;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private pokemonService: PokeapiService,
    private store: Store<AppState>) {
    this.store.select(selectPokemons).subscribe(res => {
      this.load(res);
    });
    this.store.select(selectPokemonsLoading).subscribe(res => {
      this.isLoading = res;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(151);
  }
  load(data: Pokemon[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
  getId(url: string) {
    return url?.split('/')[url?.split('/').length - 2];
  }
  ChangePage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
