export interface Data {
  hold: boolean;
  application?: boolean;

  agree: {
    body: string;
    status: string;
    title: string;
    updateAt: number;
  };

  information: {
    body: string;
    title: string;
    updateAt: number;
  };

  mail: {
    body: string;
    index: "companys" | "persons";
    target: string;
    title: string;
    updateAt: number;
  };

  maintenance: {
    status: string;
    updateAt: number;
  };
}

export interface Posts {
  matters: {
    total: number;
    private: number;
  };

  resources: {
    total: number;
    private: number;
  };

  companys: {
    total: number;
    hold: number;
  };

  persons: {
    total: number;
    hold: number;
  };
}
