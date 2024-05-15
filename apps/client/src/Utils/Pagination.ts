  export const paginate = (data: any, pageSize: number) => {
    const pageCount = Math.ceil(data.length / pageSize);
    return Array.from({ length: pageCount }, (_, index) =>
      data.slice(index * pageSize, (index + 1) * pageSize)
    );
  };
  
  