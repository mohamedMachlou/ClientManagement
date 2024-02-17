import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade';

@Component({
  selector: 'app-client-grade',
  templateUrl: './client-grade.component.html',
  styleUrl: './client-grade.component.css',
})
export class ClientGradeComponent implements OnInit {
  gradeService = inject(GradeService);
  id = signal<number>(0);
  label = signal<string>('');
  grades = signal<Grade[]>([]);
  mode = signal<String>('create');

  ngOnInit(): void {
    this.getAllGrades();
  }

  // Create or Update Grade
  createOrUpdateGrade() {
    if (this.id()) {
      this.updateGrade();
    } else {
      this.createNewGrade();
    }
  }

  // Create New Grade
  createNewGrade() {
    const grade: Grade = {
      label: this.label(),
    };
    this.gradeService.createGrade(grade).subscribe((response) => {
      console.log('New grade added', response);
      this.label.set('');
      this.getAllGrades();
    });
  }

  // Get All Grades
  getAllGrades() {
    this.gradeService.getAllGrades().subscribe((response) => {
      this.grades.set(response);
    });
  }

  // Edit Grade
  editGrade(grade: Grade) {
    let { id, label } = grade;
    if (id) {
      this.id.set(id);
    }
    this.label.set(label);
    console.log(grade);
  }

  // Update Grade by id
  updateGrade() {
    this.mode.set('update');
    const grade = {
      id: this.id(),
      label: this.label(),
    };
    this.gradeService.updateGrade(this.id(), grade).subscribe((response) => {
      this.label.set('');
      this.id.set(0);
      this.getAllGrades();
    });
  }

  // Delete Grade by id
  deleteGrade(id: number) {
    this.id.set(id);
    this.gradeService.deleteGrade(id).subscribe((response) => {
      this.grades.update((grade) => grade.filter((grade) => grade.id !== id));
      console.log(this.id);
      this.id.set(0);
    });
  }
}
